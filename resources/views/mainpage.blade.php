<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

    <script src="{{ asset('js/app.js') }}" defer></script>
</head>
    <body class="font-sans antialiased">
            <!-- Navigation -->
                    @if (Route::has('login'))
                        @auth
                    @else
                        <a href="{{ route('login') }}">LogIn</a>
                            @if (Route::has('register'))
                                <a href="{{ route('register') }}">Register</a>
                            @endif
                        @endauth
                    @endif

                @auth()
                    <div>{{ Auth::user()->name }}</div>
                    <form method="POST" action="{{ route('logout') }}">
                        @csrf
                        <a href="{{ route('logout') }}" onclick="event.preventDefault();
                             this.closest('form').submit();">Log Out</a>
                    </form>
                @endauth
            {{--End Navigation--}}

            <main>
                @auth()
                        <div id="list">{{--Это компонент РЕАКТ--}}</div>
                @endauth
                @if(!Auth::user())
                        <h3>Авторизуйтесь, чтобы начать...</h3>
                @endif
            </main>

        {{----------------------------------------Все, что ниже - ДЛЯ ТЕСТОВ------------------------------------------}}
        <hr>
        <h5 class="mt-12 text-center">Testing zone</h5>

        {{-- Это modal тест AJAX. Testing Routes--}}
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                <div class="p-2 flex-shrink-0 bd-highlight">
                    <button class="btn btn-success" id="btn-get">Test FORM</button>
                </div>

                <div class="modal fade" id="formModal" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="formModalLabel">ToDo Task</h4>
                            </div>
                            <div class="modal-body">
                                <form id="myForm" name="myForm" class="form-horizontal">
                                    @csrf
{{--                                    ВАЖНО! "ЭТОТ ТОКЕН ДОЛЖЕН БЫТЬ В КАЖДОЙ ФОРМЕ.--}}
{{--                                    Скрытый проверенный токен CSRF необходим для предотвращения атак подделки межсайтовых запросов на веб-приложения.--}}
{{--                                    CSRF-атаки - это неавторизованные действия, которые выполняют аутентифицированные пользователи системы.--}}
                                    <div class="form-group">
                                        <label>User_id</label>
                                        <input type="text" class="form-control" id="user_id" name="user_id" value={{Auth::id()}}>
                                    </div>
{{--                                    <div class="form-group">--}}
{{--                                        <label>Task_id</label>--}}
{{--                                        <input type="text" class="form-control" id="task_id" name="task_id">--}}
{{--                                    </div>--}}
                                    <div class="form-group">
                                        <label>List_id</label>
                                        <input type="text" class="form-control" id="list_id" name="list_id">
                                    </div>
                                    <div class="form-group">
                                        <label>list_Name</label>
                                        <input type="text" class="form-control" id="list_name" name="name">
                                    </div>
                                    <div class="form-group">
                                        <label>pattern_id</label>
                                        <input type="text" class="form-control" id="pattern_id" name="pattern_id">
                                    </div>
                                    <div class="form-group">
                                        <label>predefined</label>
                                        <input type="text" class="form-control" id="predefined" name="predefined">
                                    </div>
                                    <div class="mt-4">
                                        <div class="form-check">
                                            <input class="form-check-input" name="favorites" type="checkbox" id="favorites">
                                            <label for="favorites" class="form-check-label">Favorites</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-success" id="btn-request">Request</button>
                                <button type="button" class="btn btn-outline-secondary" id="btn-close">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {{-------------------------------------------Конец зоны для тестов--------------------------------------------}}

            {{--            Если пользователь авторизован, получаем объект User--}}
        @auth()
            <script>
                var user = {
                    user_id:  {{ \Illuminate\Support\Facades\Auth::user()->id }},
                    user_name: '{{ \Illuminate\Support\Facades\Auth::user()->name }}',
                    user_email: '{{ \Illuminate\Support\Facades\Auth::user()->email }}',
                }
                console.log(user)
            </script>
        @endauth
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
    </body>
</html>
