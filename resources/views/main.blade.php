@extends('default')

@section('PageTitle') MainPage @endsection

@section('content')
    <login-page v-if="!this.$store.getters.authUser"></login-page>
    <register-page v-if="!this.$store.getters.authUser"></register-page>
    <template v-if="this.$store.getters.authUser">
        <header>
            <div class="wrapper">
                <ul class="navigation__list">
                    <li class="navigation__item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="navigation__item">
                        <router-link to="/profile">Profile</router-link>
                    </li>
                    <li class="navigation__item">
                        <router-link to="/lecture">Lecture</router-link>
                    </li>
                    <li class="navigation__item">
                        <router-link to="/tests">Tests</router-link>
                    </li>
                    <li class="navigation__item">
                        <router-link to="/logout" @click="this.logout">Logout</router-link>
                    </li>
                </ul>
            </div>
        </header>
        <div class="wrapper">
            <router-view></router-view>
        </div>
    </template>

@endsection
