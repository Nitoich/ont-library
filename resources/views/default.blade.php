<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>@yield('PageTitle')</title>
        <script src="https://unpkg.com/vue@3"></script>
        <script src="https://unpkg.com/vue-router@4.0.15"></script>
        <script src="https://unpkg.com/vuex@4.0.0/dist/vuex.global.js"></script>
        <script src="/js/app.js" type="module"></script>
        @yield('AdditionalLinks')
    </head>
    <body>
        @csrf
        <script>
            window.csrftoken = document.querySelector('input[name=_token]').value;
        </script>
        <div id="app">
            @yield('content')
        </div>
    </body>
</html>
