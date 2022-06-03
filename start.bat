@echo off
cls
@echo.
@echo    *************************************************
@echo    ***                                           ***
@echo    ***  PARA PARAR A VOTACAO PRECIONE CTRL + C!  ***
@echo    ***                                           ***
@echo    *************************************************
@echo.

npm install

@echo Votando ...

:start
node f
goto start
