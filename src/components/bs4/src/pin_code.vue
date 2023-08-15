<template>
    <div style="display: flex; flex-direction: row; justify-content: center; justify-items: center;">
        <v-otp-input ref="otpInput" v-model:value="bindModal" input-classes="otp-input" separator="" :num-inputs="6"
            :should-auto-focus="true" input-type="numeric" @on-change="handleOnChange" @on-complete="handleOnComplete" />
    </div>
</template>

<script>
import VOtpInput from "vue3-otp-input";

import { ref } from "vue";
export default {
    name: "PinCode",
    components: {
        VOtpInput
    },
    setup(props) {
        const otpInput = ref(null);
        const bindModal = ref("");
        const handleOnComplete = (value) => {
            console.log("OTP completed: ", value);

        };
        const handleOnChange = (value) => {
            console.log("OTP changed: ", value);
        };
        const clearInput = () => {
            otpInput.value?.clearInput();
        };
        const fillInput = (value) => {
            console.log(value);
            otpInput.value?.fillInput(value);
        };
        return { otpInput, bindModal, handleOnChange, handleOnComplete, clearInput, fillInput }
    }
}

</script>
<style>
.otp-input {
    width: 40px;
    height: 40px;
    padding: 5px;
    margin: 0 10px;
    font-size: 20px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    text-align: center;
}

/* Background colour of an input field with value */
.otp-input.is-complete {
    background-color: #e4e4e4;
}

.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input::placeholder {
    font-size: 15px;
    text-align: center;
    font-weight: 600;
}
</style>

