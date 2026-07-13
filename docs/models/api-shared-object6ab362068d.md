# ApiSharedObject6ab362068d

## Example Usage

```typescript
import { ApiSharedObject6ab362068d } from "lapyme/models";

let value: ApiSharedObject6ab362068d = {
  id: "5c2fd5d1-6f08-4c4b-8b3d-7455e6f227d6",
  sku: "<value>",
  name: "<value>",
  optionNames: [],
  variantOptions: {
    "key": "<value>",
    "key1": "<value>",
  },
  productType: "service",
  kitUnits: 4513.98,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `sku`                                                                    | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `optionNames`                                                            | *string*[]                                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `variantOptions`                                                         | Record<string, *string*>                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `productType`                                                            | [models.ApiSharedEnum5c962a8637](../models/api-shared-enum5c962a8637.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `kitUnits`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |