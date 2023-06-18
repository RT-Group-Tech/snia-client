<template>
    <div class="main-header no-box-shadow" data-background-color="blue2">
        <div class="nav-top">
            <div class="container d-flex flex-row">
                <button class="navbar-toggler sidenav-toggler2 ml-auto" type="button" data-toggle="collapse"
                    data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">
                        <i class="icon-menu"></i>
                    </span>
                </button>
                <button class="topbar-toggler more"><i class="icon-options-vertical"></i></button>
                <!-- Logo Header -->
                <a href="" class="logo d-flex align-items-center justify-content-center mt-2">
                    <h2 class="fw-bold text-white">SENASEM</h2>
                </a>
                <!-- End Logo Header -->

                <!-- Navbar Header -->
                <nav class="navbar navbar-header-left navbar-expand-lg p-0">
                    <ul class="navbar-nav page-navigation pl-md-3">
                        <h3 class="title-menu d-flex d-lg-none">
                            Menu
                            <div class="close-menu"> <i class="flaticon-cross"></i></div>
                        </h3>
                        <li class="nav-item active dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Tableau de bord
                            </a>
                            <div class="dropdown-menu animated fadeIn" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="demo1/index-2.html">Dashboard 1</a>
                                <a class="dropdown-item" href="demo2/index-2.html">Dashboard 2</a>
                                <a class="dropdown-item" href="demo3/index-2.html">Dashboard 3</a>
                                <a class="dropdown-item" href="demo4/index-2.html">Dashboard 4</a>
                                <a class="dropdown-item" href="demo5/index-2.html">Dashboard 5</a>
                                <a class="dropdown-item" href="demo6/index-2.html">Dashboard 6</a>
                                <a class="dropdown-item" href="index-2.html">Dashboard 7</a>
                                <a class="dropdown-item" href="demo8/index-2.html">Dashboard 8</a>
                                <a class="dropdown-item" href="demo9/index-2.html">Dashboard 9</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Apps
                            </a>
                            <div class="dropdown-menu animated fadeIn" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="boards.html">Boards</a>
                                <a class="dropdown-item" href="projects.html">Projects</a>
                                <a class="dropdown-item" href="email-inbox.html">Email Inbox</a>
                                <a class="dropdown-item" href="email-detail.html">Email Detail</a>
                                <a class="dropdown-item" href="email-compose.html">Email Compose</a>
                                <a class="dropdown-item" href="messages.html">Messages</a>
                                <a class="dropdown-item" href="conversations.html">Conversations</a>
                            </div>
                        </li>

                    </ul>
                </nav>
                <nav class="navbar navbar-header navbar-expand-lg p-0">
                    <div class="container-fluid p-0">
                        <ul class="navbar-nav topbar-nav ml-md-auto align-items-center">
                            <li class="nav-item dropdown hidden-caret">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                                    aria-expanded="false" aria-haspopup="true">
                                    <i class="fa fa-search"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-search animated fadeIn">
                                    <form class="navbar-left navbar-form nav-search">
                                        <div class="input-group">
                                            <input type="text" placeholder="Search ..." class="form-control">
                                        </div>
                                    </form>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a href="#" class="nav-link quick-sidebar-toggler">
                                    <i class="fa fa-th"></i>
                                </a>
                            </li>
                            <li class="nav-item dropdown hidden-caret">
                                <a class="dropdown-toggle profile-pic" data-toggle="dropdown" href="javascript:void(0)"
                                    aria-expanded="false">
                                    <div class="avatar-sm">
                                        <img src="assets/img/picture_placeholder.png" alt="..."
                                            class="avatar-img rounded-circle">
                                    </div>
                                </a>
                                <ul class="dropdown-menu dropdown-user animated fadeIn">
                                    <div class="dropdown-user-scroll scrollbar-outer">
                                        <li>
                                            <div class="user-box">
                                                <div class="avatar-lg"><img src="assets/img/picture_placeholder.png"
                                                        alt="image profile" class="avatar-img rounded"></div>
                                                <div class="u-text">
                                                    <h4 class="fw-bold">{{ user.name }}</h4>
                                                    <p class="text-muted">{{ user.email }}</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="javascript:void(0)">Mon profl</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="javascript:void(0)">Parametres comptes</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="javascript:void(0)" @click="logout">Me
                                                Déconnecter</a>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
                <!-- End Navbar -->
            </div>
        </div>
    </div>
</template>

<script>
import AuthView from '@/mixins/auth/logview'
export default {
    mixins: [AuthView]
}
</script>