<template>
    <div class="nav-bottom">
        <div class="container">
            <h3 class="title-menu d-flex d-lg-none">
                Menu
                <div class="close-menu"> <i class="flaticon-cross"></i></div>
            </h3>
            <ul class="nav page-navigation page-navigation-info bg-white">
                <li class="nav-item submenu active">
                    <a class="nav-link" href="javascript:void(0)">
                        <i class="link-icon icon-screen-desktop"></i>
                        <span class="menu-title">Tableau de bord</span>
                    </a>

                </li>
                <li class="nav-item submenu">
                    <a class="nav-link" href="javascript:void(0)">
                        <i class="link-icon icon-home"></i>
                        <span class="menu-title">Secteur</span>
                    </a>
                    <div class="navbar-dropdown animated fadeIn">
                        <ul>
                            <li>
                                <a href="javascript:void(0)">Nouveau secteur</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Liste des secteurs</a>
                            </li>

                        </ul>
                    </div>
                </li>
                <li class="nav-item submenu">
                    <a class="nav-link" href="javascript:void(0)">
                        <i class="link-icon icon-people"></i>
                        <span class="menu-title">Agents</span>
                    </a>
                    <div class="navbar-dropdown animated fadeIn">
                        <ul>
                            <li>
                                <a href="javascript:void(0)">Nouveau agent</a>
                            </li>
                            <li>
                                <a href="starter-template.html">Liste des agents</a>
                            </li>

                        </ul>
                    </div>
                </li>

                <li class="nav-item submenu">
                    <a class="nav-link" href="javascript:void(0)">
                        <i class="link-icon icon-people"></i>
                        <span class="menu-title">Agriculteur</span>
                    </a>
                    <div class="navbar-dropdown animated fadeIn">
                        <ul>
                            <li>
                                <a href="javascript:void(0)">Création</a>
                            </li>
                            <li>
                                <a href="starter-template.html">Liste</a>
                            </li>

                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavigationBar"
}
</script>