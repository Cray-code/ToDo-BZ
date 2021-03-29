<?php

namespace App\Exceptions;

use Doctrine\DBAL\Exception;
use Doctrine\DBAL\Query\QueryException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $exception)
    {
        if ($exception instanceof ModelNotFoundException) {
            return response()->json([
                'error' => 'Ничего не найдено!!!'
            ], 404);
        }

            if ($exception instanceof HttpException) {
                return response()->json([
                    'error' => 'Неверный запрос: '.$exception->getMessage()
                ], 400);
            }

        if ($exception instanceof MethodNotAllowedHttpException) {
            return response()->json([
                'error' => 'Некорректный роут: '.$exception->getMessage()
            ], 500);
        }

        if ($exception instanceof \Illuminate\Database\QueryException) {
            return response()->json([
                'error' => 'Ошибка обращения к базе данных: '.$exception->getMessage()
            ], 500);
        }

        return parent::render($request, $exception);
    }


}
