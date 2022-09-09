@extends('default')

@section('PageTitle') MainPage @endsection

@section('content')
    <div style="display: flex; gap: 20px;">
        <a href="/#/">main</a>
        <a href="/#/about">about</a>
        <a v-if="!this.$store.getters.authUser" href="/#/login">login</a>
        <a v-if="!this.$store.getters.authUser" href="/#/register">register</a>
        <a v-if="this.$store.getters.authUser" href="/#/profile">profile</a>
        <a @click="this.logout" v-if="this.$store.getters.authUser" href="/#/">logout</a>
    </div>


    <router-view></router-view>
@endsection
