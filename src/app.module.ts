import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Productos } from './productos/productos.entity';
import { ProductosModule } from './productos/productos.module';
import { CategoriasModule } from './categorias/categoria.module';
import { Categorias } from './categorias/categorias.entity';
import { Ventas } from './ventas/ventas.entity';
import { VentasMoudule } from './ventas/ventas.moducle';
import { CajaModule } from './caja/caja.module';
import { IngresoStockModule } from './ingresoStock/ingresoStock.module';
import { IngresoStock } from './ingresoStock/ingresoStock.entity';

@Module({
  imports: [
    ProductosModule,
    CategoriasModule,
    VentasMoudule,
    CajaModule,
    IngresoStockModule,
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'tasks.db',
      entities: [Productos, Categorias, Ventas, IngresoStock],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
