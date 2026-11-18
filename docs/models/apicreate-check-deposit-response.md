# ApicreateCheckDepositResponse

## Example Usage

```typescript
import { ApicreateCheckDepositResponse } from "lapyme/models";

let value: ApicreateCheckDepositResponse = {
  requestId: "<id>",
  data: {
    object: "check_deposit",
    id: "388da32d-ea3c-4891-a366-6736c0e0f41b",
    bankAccountId: "2d01d32e-f4f8-4ad6-868e-d5b7f6f6a83e",
    depositDate: new Date("2025-06-02"),
    referenceNumber: "<value>",
    checkIds: [
      "f64a79ef-0bff-4b9f-9047-5e7e33be48c2",
    ],
    journalEntryIds: [
      "11204874-0dcd-4c65-a8df-ebdb11994914",
    ],
    createdAt: new Date("2024-03-27T10:14:38.434Z"),
    updatedAt: new Date("2026-03-16T07:32:28.245Z"),
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObjecteae97d4da5](../models/api-shared-objecteae97d4da5.md) | :heavy_check_mark:                                                           | N/A                                                                          |