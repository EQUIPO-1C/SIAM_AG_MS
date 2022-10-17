# API -GATEWAY

## Desarrollo
Primero instalar todas las dependencias

`npm install`

Se pueden correr con dos comandos

`npm run dev` (Iniciar haciendo watch de archivos)
    
`npm run start`  (Iniciar unicamente)

## Docker
Para crear la imagen de docker, usa este comando en el directorio raiz del proyecto donde esta localizado el archivo Dockerfile
	
	docker build -t siam_ag .

Para correr la imagen

	docker run -p 5000:5000 --name siam_ag siam_ag

