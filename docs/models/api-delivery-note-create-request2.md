# ApiDeliveryNoteCreateRequest2

## Example Usage

```typescript
import { ApiDeliveryNoteCreateRequest2 } from "lapyme/models";

let value: ApiDeliveryNoteCreateRequest2 = {
  origin: {
    type: "custom",
  },
  customerId: "5b3fcbd1-029b-433f-b63e-1cc13637b2ae",
  pointOfSaleId: "55d6351b-c144-4472-88f6-399cf95788d5",
  items: [
    {
      name: "<value>",
      isCustom: true,
      quantity: 5600.62,
    },
  ],
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
| `origin`                                                                     | [models.ApiSharedObject05f64e43bb](../models/api-shared-object05f64e43bb.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `customerId`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `pointOfSaleId`                                                              | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `items`                                                                      | *models.Item*[]                                                              | :heavy_check_mark:                                                           | N/A                                                                          |