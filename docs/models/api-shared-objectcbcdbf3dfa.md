# ApiSharedObjectcbcdbf3dfa

## Example Usage

```typescript
import { ApiSharedObjectcbcdbf3dfa } from "lapyme/models";

let value: ApiSharedObjectcbcdbf3dfa = {
  productId: "9fa881fe-c32c-4905-9471-b24ab05a3f0e",
  functionalCost: 5078,
  exchangeRate: 7551.67,
  rateSource: "explicit",
  rateDate: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `productId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `functionalCost`                                                         | *number*                                                                 | :heavy_check_mark:                                                       | Resolved cost in ARS cents.                                              |
| `exchangeRate`                                                           | *number*                                                                 | :heavy_check_mark:                                                       | ARS per USD, or null for a native zero without a chosen rate.            |
| `rateSource`                                                             | [models.ApiSharedEnumb5fecf3ffc](../models/api-shared-enumb5fecf3ffc.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `rateDate`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |