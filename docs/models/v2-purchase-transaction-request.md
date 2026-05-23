# V2PurchaseTransactionRequest

## Example Usage

```typescript
import { V2PurchaseTransactionRequest } from "lapyme/models";

let value: V2PurchaseTransactionRequest = {
  mode: "preview",
  input: {
    voucherType: 987176,
    currency: "PES",
  },
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `mode`                                    | [models.ModeEnum](../models/mode-enum.md) | :heavy_check_mark:                        | N/A                                       |
| `input`                                   | [models.Input](../models/input.md)        | :heavy_check_mark:                        | N/A                                       |
| `client`                                  | [models.Client](../models/client.md)      | :heavy_minus_sign:                        | N/A                                       |
| `meta`                                    | Record<string, *any*>                     | :heavy_minus_sign:                        | N/A                                       |