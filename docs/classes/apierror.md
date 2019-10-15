[Azur Lane](../README.md) › [Globals](../globals.md) › [ApiError](apierror.md)

# Class: ApiError

## Hierarchy

* Error

  ↳ **ApiError**

## Index

### Constructors

* [constructor](apierror.md#constructor)

### Properties

* [error](apierror.md#optional-error)
* [message](apierror.md#message)
* [name](apierror.md#name)
* [stack](apierror.md#optional-stack)
* [statusCode](apierror.md#statuscode)
* [statusMessage](apierror.md#statusmessage)
* [Error](apierror.md#static-error)

## Constructors

###  constructor

\+ **new ApiError**(`errorResponse`: [IErrorResponse](../interfaces/ierrorresponse.md)): *[ApiError](apierror.md)*

*Defined in [base.ts:15](https://github.com/KurozeroPB/AzurLane/blob/3106872/lib/base.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`errorResponse` | [IErrorResponse](../interfaces/ierrorresponse.md) |

**Returns:** *[ApiError](apierror.md)*

## Properties

### `Optional` error

• **error**? : *undefined | string*

*Defined in [base.ts:15](https://github.com/KurozeroPB/AzurLane/blob/3106872/lib/base.ts#L15)*

___

###  message

• **message**: *string*

*Overrides void*

*Defined in [base.ts:14](https://github.com/KurozeroPB/AzurLane/blob/3106872/lib/base.ts#L14)*

___

###  name

• **name**: *string*

*Inherited from void*

Defined in /media/pepijn/Data/Projects/NodeJS/AzurLane/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from void*

*Overrides void*

Defined in /media/pepijn/Data/Projects/NodeJS/AzurLane/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:975

___

###  statusCode

• **statusCode**: *number*

*Defined in [base.ts:12](https://github.com/KurozeroPB/AzurLane/blob/3106872/lib/base.ts#L12)*

___

###  statusMessage

• **statusMessage**: *string*

*Defined in [base.ts:13](https://github.com/KurozeroPB/AzurLane/blob/3106872/lib/base.ts#L13)*

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in /media/pepijn/Data/Projects/NodeJS/AzurLane/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:984
