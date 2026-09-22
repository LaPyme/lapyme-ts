# ApiSharedObject0a16670526

## Example Usage

```typescript
import { ApiSharedObject0a16670526 } from "lapyme/models";

let value: ApiSharedObject0a16670526 = {
  id: "da7a3913-0629-459f-a85c-c44d2d34b7c2",
  sku: "<value>",
  name: "<value>",
  optionNames: null,
  variantOptions: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  productType: "kit",
  kitUnits: 5332.31,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `object`                                                                 | *"product"*                                                              | :heavy_minus_sign:                                                       | N/A                                                                      |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `sku`                                                                    | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `optionNames`                                                            | *string*[]                                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `variantOptions`                                                         | Record<string, *string*>                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `productType`                                                            | [models.ApiSharedEnum5c962a8637](../models/api-shared-enum5c962a8637.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `kitUnits`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |