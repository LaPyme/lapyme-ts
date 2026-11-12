# Transfer

## Example Usage

```typescript
import { Transfer } from "lapyme/models/operations";

let value: Transfer = {
  action: "transfer",
  counterpartType: "safe",
  counterpartId: "00feef34-4908-4964-9435-2c0e831a3754",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `action`                                                                    | *"transfer"*                                                                | :heavy_check_mark:                                                          | N/A                                                                         |
| `counterpartType`                                                           | [models.ApiSharedEnum53162db3eb](../../models/api-shared-enum53162db3eb.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `counterpartId`                                                             | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |