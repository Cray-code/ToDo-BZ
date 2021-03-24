<x-app-layout>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
{{--                    Это компонент РЕАКТ--}}
                    <div id="react"></div>
                </div>
            </div>
        </div>


        {{-- Это тест AJAX. Извлекаем Task по Списку--}}
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                <div class="p-2 flex-shrink-0 bd-highlight">
                    <button class="btn btn-success" id="btn-get">Get Task</button>
                </div>

                <div class="modal fade" id="formModal" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="formModalLabel">Get Task</h4>
                            </div>
                            <div class="modal-body">
                                <form id="myForm" name="myForm" class="form-horizontal">
                                    @csrf
{{--                                    ВАЖНО! "ЭТОТ ТОКЕН ДОЛЖЕН БЫТЬ В КАЖДОЙ ФОРМЕ.--}}
{{--                                    Скрытый проверенный токен CSRF необходим для предотвращения атак подделки межсайтовых запросов на веб-приложения.--}}
{{--                                    CSRF-атаки - это неавторизованные действия, которые выполняют аутентифицированные пользователи системы.--}}
                                    <div class="form-group">
                                        <label>Task_id</label>
                                        <input type="text" class="form-control" id="task_id" name="task_id">
                                    </div>
                                    <div class="form-group">
                                        <label>List_id</label>
                                        <input type="text" class="form-control" id="list_id" name="list_id">
                                    </div>
                                    <div class="form-group">
                                        <label>User_id</label>
                                        <input type="text" class="form-control" id="user_id" name="user_id">
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
                                <button type="button" class="btn btn-primary" id="btn-request">Request</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
