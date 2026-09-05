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
import { RecibosModule } from './recibos/recibos.module';
import { Recibos } from './recibos/recibos.entity';
import { AuthModule } from './auth/auth.module';
import { User } from './usuarios/user.entity';

@Module({
  imports: [
    ProductosModule,
    CategoriasModule,
    VentasMoudule,
    CajaModule,
    IngresoStockModule,
    RecibosModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'tasks.db',
      entities: [Productos, Categorias, Ventas, IngresoStock, Recibos, User],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
