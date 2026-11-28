# ApiSharedObject7b350f629a

## Example Usage

```typescript
import { ApiSharedObject7b350f629a } from "lapyme/models";

let value: ApiSharedObject7b350f629a = {
  productId: "90cf9567-c17f-4a67-954c-32e3c50d27ad",
  lots: [
    {},
  ],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `productId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `lots`                                                                                                                 | [models.ApiSharedObjecta5d1522378](../models/api-shared-objecta5d1522378.md)[]                                         | :heavy_check_mark:                                                                                                     | Select an inventory number by code or lot_id. Serial quantity is one. Unavailable outbound codes return line warnings. |