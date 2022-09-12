@extends('default')

@section('PageTitle') MainPage @endsection

@section('content')
    <div style="display: flex; gap: 20px;">
        <router-link to="/">Main</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/login" v-if="!this.$store.getters.authUser">Login</router-link>
        <router-link to="/register" v-if="!this.$store.getters.authUser">Register</router-link>
        <router-link to="/profile" v-if="this.$store.getters.authUser">Profile</router-link>
        <router-link to="/" @click="this.logout" v-if="this.$store.getters.authUser">Logout</router-link>
    </div>


    <router-view></router-view>
@endsection
