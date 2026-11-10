# ApiSharedObject55b98078fb

Record an already-issued voucher after FECompConsultar; never authorizes. Mismatches: 422; ARCA unavailable: retryable 503. Accounting uses issue_date.

## Example Usage

```typescript
import { ApiSharedObject55b98078fb } from "lapyme/models";

let value: ApiSharedObject55b98078fb = {
  voucherType: 211378,
  pointOfSaleNumber: 938447,
  voucherNumber: 937239,
  cae: "<value>",
  caeExpiry: new Date("2026-11-05"),
  issueDate: new Date("2025-04-23"),
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `voucherType`               | *number*                    | :heavy_check_mark:          | N/A                         |
| `pointOfSaleNumber`         | *number*                    | :heavy_check_mark:          | N/A                         |
| `voucherNumber`             | *number*                    | :heavy_check_mark:          | N/A                         |
| `cae`                       | *string*                    | :heavy_check_mark:          | N/A                         |
| `caeExpiry`                 | [Date](../types/rfcdate.md) | :heavy_check_mark:          | N/A                         |
| `issueDate`                 | [Date](../types/rfcdate.md) | :heavy_check_mark:          | N/A                         |