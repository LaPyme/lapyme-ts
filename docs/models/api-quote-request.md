# ApiQuoteRequest

## Example Usage

```typescript
import { ApiQuoteRequest } from "lapyme/models";

let value: ApiQuoteRequest = {
  customerId: "60c35290-f21b-403c-a118-d783d49a0cd0",
  items: [],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `customerId`                                                        | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `priceListId`                                                       | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `salespersonMemberId`                                               | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `items`                                                             | [models.ApiQuoteRequestItem](../models/api-quote-request-item.md)[] | :heavy_check_mark:                                                  | N/A                                                                 |
| `expiresAt`                                                         | [Date](../types/rfcdate.md)                                         | :heavy_minus_sign:                                                  | N/A                                                                 |
| `globalDiscountAmount`                                              | *number*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `notes`                                                             | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `reservation`                                                       | [models.Reservation](../models/reservation.md)                      | :heavy_minus_sign:                                                  | N/A                                                                 |