<template>
    <div class="multiselect" style="width: 100%;" ref="parent" @click="handleClick" @blur="focused = false" tabindex="-1">
        <div class="multiselect__placeholder" v-show="modelValue.length < 1">
            {{ placeholder }}
        </div>
        <div class="multiselect__selected" v-for="(opt, i) in formattedOptions" :key="i" v-show="opt.checked">
            {{ $filters.capitalize($filters.sortLength(opt[displayProperty], 10, '...')) }}
            <span class="multiselect__remove" @click="preventClose($event); handleOptionClick(i);">&times;</span>
        </div>
        <div class="multiselect__options" @click="preventClose" v-show="focused" :style="{ top: optTop }">
            <div class="multiselect__option" v-for="(opt, i) in formattedOptions" :key="i"
                :class="{ 'multiselect__option--checked': opt.checked }" @click="handleOptionClick(i)">
                <div class="multiselect__checkbox"></div>
                <div class="multiselect__text">
                    {{ $filters.capitalize(opt[displayProperty]) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CoreMultiSelect',
    data() {
        return {
            focused: false,
            optTop: '34px;'
        }
    },
    props: {
        options: {
            type: Array,
            default: () => []
        },
        modelValue: {
            type: Array,
            default: () => []
        },
        placeholder: {
            type: String,
            default: "Click to select..."
        },
        displayProperty: {
            type: String,
            default: ""
        },
        valueProperty: {
            default: ""
        },

    },

    mounted() {
        this.fixTop();
    },

    computed: {
        formattedOptions() {
            let fo = this.options.map(opt => {
                let checked = this.modelValue.some(v => v === opt[this.valueProperty]);
                return { ...opt, checked };
            });
            return fo;
        }
    },

    methods: {
        fixTop() {
            this.optTop = this.$refs.parent.clientHeight + 2 + 'px';
        },
        handleClick() {
            this.focused = !this.focused
        },
        preventClose(e) {
            e.stopPropagation();
        },

        handleOptionClick(index) {
            let clickedValue = this.options[index][this.valueProperty];
            let newValue = [...this.modelValue];
            let existIndex = this.modelValue.findIndex(v => v === clickedValue)
            if (existIndex === -1) {
                newValue.push(clickedValue);
            }
            else {
                newValue.splice(existIndex, 1)
            }
            this.$emit('update:modelValue', newValue);
            setTimeout(this.fixTop, 100)
        }
    },
}
</script>

<style>
.multiselect {
    background: #fff;
    padding: 4px 10px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    min-height: 40px;
    min-width: 222px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: left;
    flex-wrap: wrap;
}

.multiselect:focus {
    outline: none;
}

.multiselect__placeholder {
    color: #929292
}

.multiselect__selected {
    border: 1px solid #e0e0e0;
    padding: 4px 8px;
    padding-right: 0;
    margin: 3px 3px;
}

.multiselect__remove {
    cursor: pointer;
    padding-right: 7px;
}

.multiselect__remove:hover {
    color: #FF0000;
    font-weight: bold;
}

.multiselect__options {
    position: absolute;
    top: 34px;
    right: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    background: #fff;
    flex-direction: column;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    padding: 5px 0;
    min-height: 60px;
    min-width: 188px;
    height: 200px;
    overflow-y: auto;
}

.multiselect__option {
    padding: 6px 11px;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.multiselect__option--checked {
    color: #1f7bb8;
    font-weight: bold;
}

.multiselect__checkbox {
    width: 22px;
    height: 22px;
    border: 1px solid #1f7bb8;
    transition: .3s ease-in;
    margin-right: 7px;
    position: relative;
}

.multiselect__option--checked .multiselect__checkbox {
    border: 3px solid #fff;
    border-radius: 3px;
    background: #1f7bb8;
}
</style>