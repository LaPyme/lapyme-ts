# ApicreateCheckDepositRequest

## Example Usage

```typescript
import { ApicreateCheckDepositRequest } from "lapyme/models";

let value: ApicreateCheckDepositRequest = {
  checkId: "e1b24325-7912-40ee-9c4a-d70377265ade",
  bankAccountId: "c1df25ca-bf4a-45d3-a71f-10d9655181ed",
  depositDate: new Date("2025-05-04"),
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `checkId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | One received third-party check per deposit, matching the Cheques deposit flow. |
| `bankAccountId`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `depositDate`                                                                  | [Date](../types/rfcdate.md)                                                    | :heavy_check_mark:                                                             | N/A                                                                            |
| `referenceNumber`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |