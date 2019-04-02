[Azur Lane](../README.md) > [ApiError](../classes/apierror.md)

# Class: ApiError

## Hierarchy

 `Error`

**↳ ApiError**

## Index

### Constructors

* [constructor](apierror.md#constructor)

### Properties

* [error](apierror.md#error)
* [message](apierror.md#message)
* [name](apierror.md#name)
* [stack](apierror.md#stack)
* [statusCode](apierror.md#statuscode)
* [statusMessage](apierror.md#statusmessage)
* [Error](apierror.md#error-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ApiError**(errorResponse: *[IErrorResponse](../interfaces/ierrorresponse.md)*): [ApiError](apierror.md)

*Defined in [base.ts:15](https://github.com/KurozeroPB/AzurLane/blob/0054835/lib/base.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| errorResponse | [IErrorResponse](../interfaces/ierrorresponse.md) |

**Returns:** [ApiError](apierror.md)

___

## Properties

<a id="error"></a>

### `<Optional>` error

**● error**: *`undefined` \| `string`*

*Defined in [base.ts:15](https://github.com/KurozeroPB/AzurLane/blob/0054835/lib/base.ts#L15)*

___
<a id="message"></a>

###  message

**● message**: *`string`*

*Overrides Error.message*

*Defined in [base.ts:14](https://github.com/KurozeroPB/AzurLane/blob/0054835/lib/base.ts#L14)*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Inherited from Error.name*

*Defined in /media/kurozero/Data/WebstormProjects/AzurLane/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:963*

___
<a id="stack"></a>

### `<Optional>` stack

**● stack**: *`undefined` \| `string`*

*Inherited from Error.stack*

*Overrides Error.stack*

*Defined in /media/kurozero/Data/WebstormProjects/AzurLane/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:965*

___
<a id="statuscode"></a>

###  statusCode

**● statusCode**: *`number`*

*Defined in [base.ts:12](https://github.com/KurozeroPB/AzurLane/blob/0054835/lib/base.ts#L12)*

___
<a id="statusmessage"></a>

###  statusMessage

**● statusMessage**: *`string`*

*Defined in [base.ts:13](https://github.com/KurozeroPB/AzurLane/blob/0054835/lib/base.ts#L13)*

___
<a id="error-1"></a>

### `<Static>` Error

**● Error**: *`ErrorConstructor`*

*Defined in /media/kurozero/Data/WebstormProjects/AzurLane/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:974*

___

