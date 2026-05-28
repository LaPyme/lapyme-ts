# GetApiAccountLedgerRequest

## Example Usage

```typescript
import { GetApiAccountLedgerRequest } from "lapyme/models/operations";

let value: GetApiAccountLedgerRequest = {
  accountId: "eb1136c5-45b2-4d4c-b3ae-d66ac99a81da",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `accountId`                    | *string*                       | :heavy_check_mark:             | N/A                            |
| `cursor`                       | *string*                       | :heavy_minus_sign:             | N/A                            |
| `limit`                        | *number*                       | :heavy_minus_sign:             | N/A                            |
| `dateFrom`                     | [Date](../../types/rfcdate.md) | :heavy_minus_sign:             | N/A                            |
| `dateTo`                       | [Date](../../types/rfcdate.md) | :heavy_minus_sign:             | N/A                            |
| `sourceType`                   | *string*                       | :heavy_minus_sign:             | N/A                            |
| `contactId`                    | *string*                       | :heavy_minus_sign:             | N/A                            |