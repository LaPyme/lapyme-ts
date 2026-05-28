# ApiSharedObject799d3e3f37

## Example Usage

```typescript
import { ApiSharedObject799d3e3f37 } from "lapyme/models";

let value: ApiSharedObject799d3e3f37 = {
  object: "accounting_evidence",
  status: "failed",
  journalEntryIds: [
    "ce8b35c6-f900-434a-8598-a786c6b961db",
    "484fa67f-12e4-4c0c-9011-837bcdd90f98",
  ],
  journalEntriesUrl: "https://pleased-charlatan.com/",
  warnings: [
    {
      code: "<value>",
      message: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `object`                                                                       | *"accounting_evidence"*                                                        | :heavy_check_mark:                                                             | N/A                                                                            |
| `status`                                                                       | [models.ApiSharedEnum8b51d9e8f5](../models/api-shared-enum8b51d9e8f5.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `journalEntryIds`                                                              | *string*[]                                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `journalEntriesUrl`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `warnings`                                                                     | [models.ApiSharedObject76de9df039](../models/api-shared-object76de9df039.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |