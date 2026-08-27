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
      id: "c4a0b478-b0e9-40aa-a06f-be28f0ddf586",
      scope: "purchase",
      name: "<value>",
      slug: "<value>",
      color: "teal",
      description: "norm youthful ugh drive victoriously",
      archivedAt: new Date("2026-10-03T04:47:37.645Z"),
      createdAt: new Date("2026-03-15T05:11:35.797Z"),
      updatedAt: new Date("2025-02-21T13:32:00.515Z"),
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
| `tags`                                                                         | [models.ApiSharedObject8a94344083](../models/api-shared-object8a94344083.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |