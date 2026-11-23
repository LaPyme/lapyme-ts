# Product

## Example Usage

```typescript
import { Product } from "lapyme/models";

let value: Product = {
  id: "2b09abb7-4d07-4032-9060-1fb05956f839",
  sku: "<value>",
  supplierSku: "<value>",
  name: null,
  productType: "product",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `sku`                                                                    | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `supplierSku`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | SKU del proveedor de la variante en el catálogo actual.                  |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `productType`                                                            | [models.ApiSharedEnumff49232140](../models/api-shared-enumff49232140.md) | :heavy_check_mark:                                                       | N/A                                                                      |