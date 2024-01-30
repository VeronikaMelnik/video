import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "./pipes/validation.pipe";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule)


  const config = new DocumentBuilder()
    .setTitle('BFCHKP')
    .setDescription('Web-application of the organization «Belarusian Federation of Cheerleading and Support Teams» was created as an assistant in search of information about competitions, coaches, disciplines and other parts of the federation')
    .setVersion('1.0.0')
    .addTag('Melnik')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()