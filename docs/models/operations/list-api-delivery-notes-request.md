# ListApiDeliveryNotesRequest

## Example Usage

```typescript
import { ListApiDeliveryNotesRequest } from "lapyme/models/operations";

let value: ListApiDeliveryNotesRequest = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `cursor`                                         | *string*                                         | :heavy_minus_sign:                               | The next_cursor value from the previous response |
| `limit`                                          | *number*                                         | :heavy_minus_sign:                               | Maximum results per response                     |
| `saleId`                                         | *string*                                         | :heavy_minus_sign:                               | Filter by the originating sale                   |
| `customerId`                                     | *string*                                         | :heavy_minus_sign:                               | Filter by customer                               |
| `query`                                          | *string*                                         | :heavy_minus_sign:                               | Search by customer or delivery note number       |
| `search`                                         | *string*                                         | :heavy_minus_sign:                               | Alias for query                                  |
| `dateFrom`                                       | [Date](../../types/rfcdate.md)                   | :heavy_minus_sign:                               | Inclusive delivery note date lower bound         |
| `dateTo`                                         | [Date](../../types/rfcdate.md)                   | :heavy_minus_sign:                               | Inclusive delivery note date upper bound         |