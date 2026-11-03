# ApiRemitoDetailResponseData

## Example Usage

```typescript
import { ApiRemitoDetailResponseData } from "lapyme/models";

let value: ApiRemitoDetailResponseData = {
  id: "07c594ab-fdb0-467f-83d3-bdd652bfac78",
  number: "<value>",
  date: new Date("2024-01-10"),
  customer: {
    id: "ef11a53d-2ff0-454b-9a6d-7e55c6543057",
    name: null,
  },
  origin: {
    type: "custom",
  },
  created: new Date("2025-09-03T12:02:15.839Z"),
  issuer: {
    legalName: "<value>",
    taxId: null,
    taxIdType: "<value>",
    taxCategory: "<value>",
    address: "2140 Church Street",
    apartment: "<value>",
    city: "East Jonatan",
    province: "<value>",
    postalCode: "56347-0827",
    phone: "649.461.5809 x474",
    grossIncomeTaxAmount: "<value>",
    activitiesStartedAt: "<value>",
  },
  remitoNumber: 369663,
  pointOfSale: {
    id: "48b71e69-ecda-4e77-bd2d-ee741653dcb7",
    number: 586183,
    name: "<value>",
  },
  carrier: "<value>",
  deliveryAddress: "<value>",
  scheduledDate: new Date("2026-02-17"),
  deliveredAt: new Date("2026-04-14T09:08:43.385Z"),
  recipientName: "<value>",
  recipientDni: "<value>",
  driverId: null,
  notes: "<value>",
  items: [
    {
      id: "3eb9fa06-26d0-4b4f-bc6a-94f9fcc5bcb9",
      saleItemId: "6f0ea941-14cd-4078-9876-9ad1ecbcfb2d",
      quantity: 99.57,
      name: "<value>",
      isCustom: true,
      warehouseId: "d52fcc35-0faa-439c-985f-cd122d77f1f9",
      product: {
        id: "b916bc44-e729-46fd-a01e-0965ef2c552b",
        sku: "<value>",
        name: "<value>",
        optionNames: [],
        variantOptions: {
          "key": "<value>",
          "key1": "<value>",
        },
        productType: "product",
        kitUnits: 8793.1,
      },
    },
  ],
  updated: new Date("2025-05-12T01:12:05.443Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"remito"*                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `number`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `date`                                                                                        | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customer`                                                                                    | [models.ApiSharedObject5e70e1df84](../models/api-shared-object5e70e1df84.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `origin`                                                                                      | *models.ApiRemitoDetailResponseOrigin*                                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `issuer`                                                                                      | [models.ApiSharedObjectd6ec566aaf](../models/api-shared-objectd6ec566aaf.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `remitoNumber`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pointOfSale`                                                                                 | [models.ApiSharedObject94c0cab352](../models/api-shared-object94c0cab352.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `carrier`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deliveryAddress`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scheduledDate`                                                                               | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deliveredAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `recipientName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `recipientDni`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `driverId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.ApiSharedObject912052d04a](../models/api-shared-object912052d04a.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |