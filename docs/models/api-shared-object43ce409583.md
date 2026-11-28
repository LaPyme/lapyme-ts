# ApiSharedObject43ce409583

## Example Usage

```typescript
import { ApiSharedObject43ce409583 } from "lapyme/models";

let value: ApiSharedObject43ce409583 = {
  id: "becbdddf-944c-44d5-997e-d5c6dae9d426",
  name: "<value>",
  sku: "<value>",
  supplierSku: "<value>",
  productType: null,
  variantOptions: {},
  optionNames: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `sku`                                                                    | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `supplierSku`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | SKU del proveedor de la variante en el catálogo actual.                  |
| `productType`                                                            | [models.ApiSharedEnumff49232140](../models/api-shared-enumff49232140.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `variantOptions`                                                         | Record<string, *string*>                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `optionNames`                                                            | *string*[]                                                               | :heavy_check_mark:                                                       | N/A                                                                      |