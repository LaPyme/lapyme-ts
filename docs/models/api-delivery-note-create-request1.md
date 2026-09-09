# ApiDeliveryNoteCreateRequest1

## Example Usage

```typescript
import { ApiDeliveryNoteCreateRequest1 } from "lapyme/models";

let value: ApiDeliveryNoteCreateRequest1 = {
  origin: {
    type: "sale",
    saleId: "30955195-e9de-4e71-aceb-e451539c98d6",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `date`                                                                       | [Date](../types/rfcdate.md)                                                  | :heavy_minus_sign:                                                           | N/A                                                                          |
| `notes`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `carrier`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `deliveryAddress`                                                            | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `scheduledDate`                                                              | [Date](../types/rfcdate.md)                                                  | :heavy_minus_sign:                                                           | N/A                                                                          |
| `recipientName`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `recipientDocument`                                                          | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `origin`                                                                     | [models.ApiSharedObjectc15d6ab2fa](../models/api-shared-objectc15d6ab2fa.md) | :heavy_check_mark:                                                           | N/A                                                                          |