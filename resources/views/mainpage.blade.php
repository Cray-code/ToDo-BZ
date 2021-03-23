<x-app-layout>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">

{{--                    Это компонент РЕАКТ--}}
                    <div id="example"></div>
                </div>
            </div>
        </div>

        {{-- Это тест AJAX извлекаем все юзеров--}}
        <div>
            <div id="test"></div>
            <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
            <script>
                $.ajax({
                    type: "GET",
                    dataType: "json",
                    url: '/api/user/all',
                    success: function (data) {
                        console.log(data);
                    }
                });
            </script>
        </div>
    </div>
</x-app-layout>
