<x-app-layout>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
{{--                    <div id="example"></div>--}}{{--Это компонент РЕАКТ--}}
                </div>
            </div>
        </div>

        {{-- Это тест AJAX извлекаем все юзеров--}}
        <div>
            <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
            <script>
                // $.ajax({
                //     type: "GET",
                //     dataType: "json",
                //     url: '/api/user/all',
                //     success: function (data) {
                //         console.log(data);
                //     }
                // });
            </script>
        </div>

        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div id="message"></div>
                <div class="p-6 bg-white border-b border-gray-200  d-flex justify-content-center">
                    <form style="width: 50%" id="form"
                          method="post"
                          action="{{ route('test') }}"
                    >
                        @csrf
{{--                        ВАЖНО! "ЭТОТ ТОКЕН ДОЛЖЕН БЫТЬ В КАЖДОЙ ФОРМЕ.--}}
{{--                        Скрытый проверенный токен CSRF необходим для предотвращения атак подделки межсайтовых запросов на веб-приложения.--}}
{{--                        CSRF-атаки - это неавторизованные действия, которые выполняют аутентифицированные пользователи системы.--}}
                        <div>
                            <label for="user_id">User_id</label>
                            <input id="user_id" class="block mt-1 w-full" type="text" name="user_id" autofocus>
                        </div>

                        <div class="mt-4">
                            <label for="task_id">Task_id</label>
                            <input id="task_id" class="block mt-1 w-full" type="text" name="task_id">
                        </div>

                        <div class="mt-4">
                            <label for="task_name">Задача</label>
                            <input id="task_name" class="block mt-1 w-full" type="text" name="task_name">
                        </div>

                        <div class="flex items-center justify-end mt-4">
                            <button class="btn btn-success ml-4">Send request</button>
                        </div>
                    </form>
                </div>
            </div>
            <script>
                // $("#form").on("submit", function(){
                    {{--$.ajax({--}}
                    {{--    url: '{{ route('test') }}',--}}
                    {{--    method: 'get',--}}
                    {{--    dataType: 'json',--}}
                    {{--    success: function(data){--}}
                    {{--        console.log(data);--}}
                    {{--    }--}}
                    {{--});--}}

                {{--    $.ajax({--}}
                {{--        url: '{{ route('test') }}',--}}
                {{--        method: 'post',--}}
                {{--        dataType: 'html',--}}
                {{--        data: $(this).serialize(),--}}
                {{--        success: function(data){--}}
                {{--            $('#message').html(data);--}}
                {{--        }--}}
                {{--    });--}}
                // });
            </script>
        </div>
    </div>
</x-app-layout>
