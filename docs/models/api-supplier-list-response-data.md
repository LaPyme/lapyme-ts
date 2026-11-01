# ApiSupplierListResponseData

## Example Usage

```typescript
import { ApiSupplierListResponseData } from "lapyme/models";

let value: ApiSupplierListResponseData = {
  object: "supplier",
  id: "e1ac4376-1727-4098-90c7-9dd489e4d835",
  name: "<value>",
  companyName: "Goodwin, Wolff and Wolff",
  description: "between while zowie pfft rosy finally recompense",
  email: "Hilbert.Terry-Kunde57@hotmail.com",
  phone: "220-950-5327 x208",
  taxId: null,
  taxIdType: "<value>",
  taxCategory: "<value>",
  paymentTermId: null,
  paymentTermDays: null,
  isActive: true,
  tags: [
    {
      object: "tag",
      id: "b4c64393-84ca-458c-8f3b-39718b070484",
      scope: "transfer",
      name: "<value>",
      slug: "<value>",
      color: "pink",
      description: "delectable astride downright",
      archivedAt: new Date("2024-08-12T06:34:32.349Z"),
      createdAt: new Date("2024-10-25T15:17:34.484Z"),
      updatedAt: new Date("2024-11-10T16:15:42.311Z"),
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `object`                                                                       | *"supplier"*                                                                   | :heavy_check_mark:                                                             | N/A                                                                            |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `companyName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `description`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `email`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `phone`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `taxId`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `taxIdType`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `taxCategory`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `paymentTermId`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `paymentTermDays`                                                              | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `isActive`                                                                     | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `tags`                                                                         | [models.ApiSharedObjected3905a55b](../models/api-shared-objected3905a55b.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |