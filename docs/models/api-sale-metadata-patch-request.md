# ApiSaleMetadataPatchRequest

Actualizacion parcial de metadatos operativos de venta. Envia al menos un campo. integration_source e integration_id deben enviarse juntos; para limpiar la referencia externa, envia ambos en null.

## Example Usage

```typescript
import { ApiSaleMetadataPatchRequest } from "lapyme/models";

let value: ApiSaleMetadataPatchRequest = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `notes`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | Notas operativas de la venta. Enviar null o string vacio para limpiar. |
| `integrationSource`                                                    | *string*                                                               | :heavy_minus_sign:                                                     | Fuente de integracion externa. Debe enviarse junto con integrationId.  |
| `integrationId`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | ID de referencia externa. Debe enviarse junto con integrationSource.   |
| `salespersonId`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | ID del miembro/vendedor que debe quedar asociado a la venta.           |