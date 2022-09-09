@extends('default')

@section('PageTitle') MainPage @endsection

@section('content')
    <a href="/#/">main</a>
    <a href="/#/about">about</a>
    <router-view></router-view>
@endsection
