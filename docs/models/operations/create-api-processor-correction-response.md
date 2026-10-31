# CreateApiProcessorCorrectionResponse

Committed resource or replay

## Example Usage

```typescript
import { CreateApiProcessorCorrectionResponse } from "lapyme/models/operations";

let value: CreateApiProcessorCorrectionResponse = {
  requestId: "<id>",
  data: {
    object: "processor_correction",
    id: "e95b544e-d942-49dd-8818-c48e4b468dcb",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `data`                                                                                                         | [operations.CreateApiProcessorCorrectionData](../../models/operations/create-api-processor-correction-data.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |