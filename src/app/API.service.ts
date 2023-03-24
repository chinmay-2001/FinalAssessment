/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import Observable from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateFlight: OnCreateFlightSubscription;
  onUpdateFlight: OnUpdateFlightSubscription;
  onDeleteFlight: OnDeleteFlightSubscription;
  onCreateTicket: OnCreateTicketSubscription;
  onUpdateTicket: OnUpdateTicketSubscription;
  onDeleteTicket: OnDeleteTicketSubscription;
};

export type CreateFlightInput = {
  flightid: string;
  capacity: number;
  id?: string | null;
};

export type ModelFlightConditionInput = {
  flightid?: ModelIDInput | null;
  capacity?: ModelIntInput | null;
  and?: Array<ModelFlightConditionInput | null> | null;
  or?: Array<ModelFlightConditionInput | null> | null;
  not?: ModelFlightConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Flight = {
  __typename: "Flight";
  flightid: string;
  capacity: number;
  ticket?: ModelTicketConnection | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ModelTicketConnection = {
  __typename: "ModelTicketConnection";
  items: Array<Ticket | null>;
  nextToken?: string | null;
};

export type Ticket = {
  __typename: "Ticket";
  bookingid: string;
  passengerName: string;
  noOfTicket: number;
  flight?: Flight | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  flightTicketId?: string | null;
};

export type UpdateFlightInput = {
  flightid?: string | null;
  capacity?: number | null;
  id: string;
};

export type DeleteFlightInput = {
  id: string;
};

export type CreateTicketInput = {
  bookingid: string;
  passengerName: string;
  noOfTicket: number;
  id?: string | null;
  flightTicketId?: string | null;
};

export type ModelTicketConditionInput = {
  bookingid?: ModelIDInput | null;
  passengerName?: ModelStringInput | null;
  noOfTicket?: ModelIntInput | null;
  and?: Array<ModelTicketConditionInput | null> | null;
  or?: Array<ModelTicketConditionInput | null> | null;
  not?: ModelTicketConditionInput | null;
  flightTicketId?: ModelIDInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateTicketInput = {
  bookingid?: string | null;
  passengerName?: string | null;
  noOfTicket?: number | null;
  id: string;
  flightTicketId?: string | null;
};

export type DeleteTicketInput = {
  id: string;
};

export type SearchableFlightFilterInput = {
  flightid?: SearchableIDFilterInput | null;
  capacity?: SearchableIntFilterInput | null;
  id?: SearchableIDFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableFlightFilterInput | null> | null;
  or?: Array<SearchableFlightFilterInput | null> | null;
  not?: SearchableFlightFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableIntFilterInput = {
  ne?: number | null;
  gt?: number | null;
  lt?: number | null;
  gte?: number | null;
  lte?: number | null;
  eq?: number | null;
  range?: Array<number | null> | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableFlightSortInput = {
  field?: SearchableFlightSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableFlightSortableFields {
  flightid = "flightid",
  capacity = "capacity",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}

export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc"
}

export type SearchableFlightAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableFlightAggregateField;
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum"
}

export enum SearchableFlightAggregateField {
  flightid = "flightid",
  capacity = "capacity",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}

export type SearchableFlightConnection = {
  __typename: "SearchableFlightConnection";
  items: Array<Flight | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult";
  name: string;
  result?: SearchableAggregateGenericResult | null;
};

export type SearchableAggregateGenericResult =
  | SearchableAggregateScalarResult
  | SearchableAggregateBucketResult;

export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult";
  value: number;
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult";
  buckets?: Array<SearchableAggregateBucketResultItem | null> | null;
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem";
  key: string;
  doc_count: number;
};

export type SearchableTicketFilterInput = {
  bookingid?: SearchableIDFilterInput | null;
  passengerName?: SearchableStringFilterInput | null;
  noOfTicket?: SearchableIntFilterInput | null;
  id?: SearchableIDFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  flightTicketId?: SearchableIDFilterInput | null;
  and?: Array<SearchableTicketFilterInput | null> | null;
  or?: Array<SearchableTicketFilterInput | null> | null;
  not?: SearchableTicketFilterInput | null;
};

export type SearchableTicketSortInput = {
  field?: SearchableTicketSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableTicketSortableFields {
  bookingid = "bookingid",
  passengerName = "passengerName",
  noOfTicket = "noOfTicket",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  flightTicketId = "flightTicketId"
}

export type SearchableTicketAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableTicketAggregateField;
};

export enum SearchableTicketAggregateField {
  bookingid = "bookingid",
  passengerName = "passengerName",
  noOfTicket = "noOfTicket",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  flightTicketId = "flightTicketId"
}

export type SearchableTicketConnection = {
  __typename: "SearchableTicketConnection";
  items: Array<Ticket | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelFlightFilterInput = {
  flightid?: ModelIDInput | null;
  capacity?: ModelIntInput | null;
  and?: Array<ModelFlightFilterInput | null> | null;
  or?: Array<ModelFlightFilterInput | null> | null;
  not?: ModelFlightFilterInput | null;
};

export type ModelFlightConnection = {
  __typename: "ModelFlightConnection";
  items: Array<Flight | null>;
  nextToken?: string | null;
};

export type ModelTicketFilterInput = {
  bookingid?: ModelIDInput | null;
  passengerName?: ModelStringInput | null;
  noOfTicket?: ModelIntInput | null;
  and?: Array<ModelTicketFilterInput | null> | null;
  or?: Array<ModelTicketFilterInput | null> | null;
  not?: ModelTicketFilterInput | null;
  flightTicketId?: ModelIDInput | null;
};

export type ModelSubscriptionFlightFilterInput = {
  flightid?: ModelSubscriptionIDInput | null;
  capacity?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionFlightFilterInput | null> | null;
  or?: Array<ModelSubscriptionFlightFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionTicketFilterInput = {
  bookingid?: ModelSubscriptionIDInput | null;
  passengerName?: ModelSubscriptionStringInput | null;
  noOfTicket?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionTicketFilterInput | null> | null;
  or?: Array<ModelSubscriptionTicketFilterInput | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type CreateFlightMutation = {
  __typename: "Flight";
  flightid: string;
  capacity: number;
  ticket?: {
    __typename: "ModelTicketConnection";
    items: Array<{
      __typename: "Ticket";
      bookingid: string;
      passengerName: string;
      noOfTicket: number;
      id: string;
      createdAt: string;
      updatedAt: string;
      flightTicketId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFlightMutation = {
  __typename: "Flight";
  flightid: string;
  capacity: number;
  ticket?: {
    __typename: "ModelTicketConnection";
    items: Array<{
      __typename: "Ticket";
      bookingid: string;
      passengerName: string;
      noOfTicket: number;
      id: string;
      createdAt: string;
      updatedAt: string;
      flightTicketId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteFlightMutation = {
  __typename: "Flight";
  flightid: string;
  capacity: number;
  ticket?: {
    __typename: "ModelTicketConnection";
    items: Array<{
      __typename: "Ticket";
      bookingid: string;
      passengerName: string;
      noOfTicket: number;
      id: string;
      createdAt: string;
      updatedAt: string;
      flightTicketId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateTicketMutation = {
  __typename: "Ticket";
  bookingid: string;
  passengerName: string;
  noOfTicket: number;
  flight?: {
    __typename: "Flight";
    flightid: string;
    capacity: number;
    ticket?: {
      __typename: "ModelTicketConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  flightTicketId?: string | null;
};

export type UpdateTicketMutation = {
  __typename: "Ticket";
  bookingid: string;
  passengerName: string;
  noOfTicket: number;
  flight?: {
    __typename: "Flight";
    flightid: string;
    capacity: number;
    ticket?: {
      __typename: "ModelTicketConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  flightTicketId?: string | null;
};

export type DeleteTicketMutation = {
  __typename: "Ticket";
  bookingid: string;
  passengerName: string;
  noOfTicket: number;
  flight?: {
    __typename: "Flight";
    flightid: string;
    capacity: number;
    ticket?: {
      __typename: "ModelTicketConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  flightTicketId?: string | null;
};

export type SearchFlightsQuery = {
  __typename: "SearchableFlightConnection";
  items: Array<{
    __typename: "Flight";
    flightid: string;
    capacity: number;
    ticket?: {
      __typename: "ModelTicketConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<{
    __typename: "SearchableAggregateResult";
    name: string;
    result:
    | (
      | {
        __typename: "SearchableAggregateScalarResult";
        value: number;
      }
      | {
        __typename: "SearchableAggregateBucketResult";
        buckets?: Array<{
          __typename: string;
          key: string;
          doc_count: number;
        } | null> | null;
      }
    )
    | null;
  } | null>;
};

export type SearchTicketsQuery = {
  __typename: "SearchableTicketConnection";
  items: Array<{
    __typename: "Ticket";
    bookingid: string;
    passengerName: string;
    noOfTicket: number;
    flight?: {
      __typename: "Flight";
      flightid: string;
      capacity: number;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    flightTicketId?: string | null;
  } | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<{
    __typename: "SearchableAggregateResult";
    name: string;
    result:
    | (
      | {
        __typename: "SearchableAggregateScalarResult";
        value: number;
      }
      | {
        __typename: "SearchableAggregateBucketResult";
        buckets?: Array<{
          __typename: string;
          key: string;
          doc_count: number;
        } | null> | null;
      }
    )
    | null;
  } | null>;
};

export type GetFlightQuery = {
  __typename: "Flight";
  flightid: string;
  capacity: number;
  ticket?: {
    __typename: "ModelTicketConnection";
    items: Array<{
      __typename: "Ticket";
      bookingid: string;
      passengerName: string;
      noOfTicket: number;
      id: string;
      createdAt: string;
      updatedAt: string;
      flightTicketId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListFlightsQuery = {
  __typename: "ModelFlightConnection";
  items: Array<{
    __typename: "Flight";
    flightid: string;
    capacity: number;
    ticket?: {
      __typename: "ModelTicketConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetTicketQuery = {
  __typename: "Ticket";
  bookingid: string;
  passengerName: string;
  noOfTicket: number;
  flight?: {
    __typename: "Flight";
    flightid: string;
    capacity: number;
    ticket?: {
      __typename: "ModelTicketConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  flightTicketId?: string | null;
};

export type ListTicketsQuery = {
  __typename: "ModelTicketConnection";
  items: Array<{
    __typename: "Ticket";
    bookingid: string;
    passengerName: string;
    noOfTicket: number;
    flight?: {
      __typename: "Flight";
      flightid: string;
      capacity: number;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    flightTicketId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateFlightSubscription = {
  __typename: "Flight";
  flightid: string;
  capacity: number;
  ticket?: {
    __typename: "ModelTicketConnection";
    items: Array<{
      __typename: "Ticket";
      bookingid: string;
      passengerName: string;
      noOfTicket: number;
      id: string;
      createdAt: string;
      updatedAt: string;
      flightTicketId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateFlightSubscription = {
  __typename: "Flight";
  flightid: string;
  capacity: number;
  ticket?: {
    __typename: "ModelTicketConnection";
    items: Array<{
      __typename: "Ticket";
      bookingid: string;
      passengerName: string;
      noOfTicket: number;
      id: string;
      createdAt: string;
      updatedAt: string;
      flightTicketId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteFlightSubscription = {
  __typename: "Flight";
  flightid: string;
  capacity: number;
  ticket?: {
    __typename: "ModelTicketConnection";
    items: Array<{
      __typename: "Ticket";
      bookingid: string;
      passengerName: string;
      noOfTicket: number;
      id: string;
      createdAt: string;
      updatedAt: string;
      flightTicketId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTicketSubscription = {
  __typename: "Ticket";
  bookingid: string;
  passengerName: string;
  noOfTicket: number;
  flight?: {
    __typename: "Flight";
    flightid: string;
    capacity: number;
    ticket?: {
      __typename: "ModelTicketConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  flightTicketId?: string | null;
};

export type OnUpdateTicketSubscription = {
  __typename: "Ticket";
  bookingid: string;
  passengerName: string;
  noOfTicket: number;
  flight?: {
    __typename: "Flight";
    flightid: string;
    capacity: number;
    ticket?: {
      __typename: "ModelTicketConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  flightTicketId?: string | null;
};

export type OnDeleteTicketSubscription = {
  __typename: "Ticket";
  bookingid: string;
  passengerName: string;
  noOfTicket: number;
  flight?: {
    __typename: "Flight";
    flightid: string;
    capacity: number;
    ticket?: {
      __typename: "ModelTicketConnection";
      nextToken?: string | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  flightTicketId?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateFlight(
    input: CreateFlightInput,
    condition?: ModelFlightConditionInput
  ): Promise<CreateFlightMutation> {
    const statement = `mutation CreateFlight($input: CreateFlightInput!, $condition: ModelFlightConditionInput) {
        createFlight(input: $input, condition: $condition) {
          __typename
          flightid
          capacity
          ticket {
            __typename
            items {
              __typename
              bookingid
              passengerName
              noOfTicket
              id
              createdAt
              updatedAt
              flightTicketId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFlightMutation>response.data.createFlight;
  }
  async UpdateFlight(
    input: UpdateFlightInput,
    condition?: ModelFlightConditionInput
  ): Promise<UpdateFlightMutation> {
    const statement = `mutation UpdateFlight($input: UpdateFlightInput!, $condition: ModelFlightConditionInput) {
        updateFlight(input: $input, condition: $condition) {
          __typename
          flightid
          capacity
          ticket {
            __typename
            items {
              __typename
              bookingid
              passengerName
              noOfTicket
              id
              createdAt
              updatedAt
              flightTicketId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFlightMutation>response.data.updateFlight;
  }
  async DeleteFlight(
    input: DeleteFlightInput,
    condition?: ModelFlightConditionInput
  ): Promise<DeleteFlightMutation> {
    const statement = `mutation DeleteFlight($input: DeleteFlightInput!, $condition: ModelFlightConditionInput) {
        deleteFlight(input: $input, condition: $condition) {
          __typename
          flightid
          capacity
          ticket {
            __typename
            items {
              __typename
              bookingid
              passengerName
              noOfTicket
              id
              createdAt
              updatedAt
              flightTicketId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFlightMutation>response.data.deleteFlight;
  }
  async CreateTicket(
    input: CreateTicketInput,
    condition?: ModelTicketConditionInput
  ): Promise<CreateTicketMutation> {
    const statement = `mutation CreateTicket($input: CreateTicketInput!, $condition: ModelTicketConditionInput) {
        createTicket(input: $input, condition: $condition) {
          __typename
          bookingid
          passengerName
          noOfTicket
          flight {
            __typename
            flightid
            capacity
            ticket {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          flightTicketId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTicketMutation>response.data.createTicket;
  }
  async UpdateTicket(
    input: UpdateTicketInput,
    condition?: ModelTicketConditionInput
  ): Promise<UpdateTicketMutation> {
    const statement = `mutation UpdateTicket($input: UpdateTicketInput!, $condition: ModelTicketConditionInput) {
        updateTicket(input: $input, condition: $condition) {
          __typename
          bookingid
          passengerName
          noOfTicket
          flight {
            __typename
            flightid
            capacity
            ticket {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          flightTicketId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTicketMutation>response.data.updateTicket;
  }
  async DeleteTicket(
    input: DeleteTicketInput,
    condition?: ModelTicketConditionInput
  ): Promise<DeleteTicketMutation> {
    const statement = `mutation DeleteTicket($input: DeleteTicketInput!, $condition: ModelTicketConditionInput) {
        deleteTicket(input: $input, condition: $condition) {
          __typename
          bookingid
          passengerName
          noOfTicket
          flight {
            __typename
            flightid
            capacity
            ticket {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          flightTicketId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTicketMutation>response.data.deleteTicket;
  }
  async SearchFlights(
    filter?: SearchableFlightFilterInput,
    sort?: Array<SearchableFlightSortInput | null>,
    limit?: number,
    nextToken?: string,
    from?: number,
    aggregates?: Array<SearchableFlightAggregationInput | null>
  ): Promise<SearchFlightsQuery> {
    const statement = `query SearchFlights($filter: SearchableFlightFilterInput, $sort: [SearchableFlightSortInput], $limit: Int, $nextToken: String, $from: Int, $aggregates: [SearchableFlightAggregationInput]) {
        searchFlights(
          filter: $filter
          sort: $sort
          limit: $limit
          nextToken: $nextToken
          from: $from
          aggregates: $aggregates
        ) {
          __typename
          items {
            __typename
            flightid
            capacity
            ticket {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          nextToken
          total
          aggregateItems {
            __typename
            name
            result {
              __typename
              ... on SearchableAggregateScalarResult {
                value
              }
              ... on SearchableAggregateBucketResult {
                buckets {
                  __typename
                  key
                  doc_count
                }
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (from) {
      gqlAPIServiceArguments.from = from;
    }
    if (aggregates) {
      gqlAPIServiceArguments.aggregates = aggregates;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchFlightsQuery>response.data.searchFlights;
  }
  async SearchTickets(
    filter?: SearchableTicketFilterInput,
    sort?: Array<SearchableTicketSortInput | null>,
    limit?: number,
    nextToken?: string,
    from?: number,
    aggregates?: Array<SearchableTicketAggregationInput | null>
  ): Promise<SearchTicketsQuery> {
    const statement = `query SearchTickets($filter: SearchableTicketFilterInput, $sort: [SearchableTicketSortInput], $limit: Int, $nextToken: String, $from: Int, $aggregates: [SearchableTicketAggregationInput]) {
        searchTickets(
          filter: $filter
          sort: $sort
          limit: $limit
          nextToken: $nextToken
          from: $from
          aggregates: $aggregates
        ) {
          __typename
          items {
            __typename
            bookingid
            passengerName
            noOfTicket
            flight {
              __typename
              flightid
              capacity
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            flightTicketId
          }
          nextToken
          total
          aggregateItems {
            __typename
            name
            result {
              __typename
              ... on SearchableAggregateScalarResult {
                value
              }
              ... on SearchableAggregateBucketResult {
                buckets {
                  __typename
                  key
                  doc_count
                }
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (from) {
      gqlAPIServiceArguments.from = from;
    }
    if (aggregates) {
      gqlAPIServiceArguments.aggregates = aggregates;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchTicketsQuery>response.data.searchTickets;
  }
  async GetFlight(id: string): Promise<GetFlightQuery> {
    const statement = `query GetFlight($id: ID!) {
        getFlight(id: $id) {
          __typename
          flightid
          capacity
          ticket {
            __typename
            items {
              __typename
              bookingid
              passengerName
              noOfTicket
              id
              createdAt
              updatedAt
              flightTicketId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFlightQuery>response.data.getFlight;
  }
  async ListFlights(
    filter?: ModelFlightFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFlightsQuery> {
    const statement = `query ListFlights($filter: ModelFlightFilterInput, $limit: Int, $nextToken: String) {
        listFlights(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            flightid
            capacity
            ticket {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFlightsQuery>response.data.listFlights;
  }
  async GetTicket(id: string): Promise<GetTicketQuery> {
    const statement = `query GetTicket($id: ID!) {
        getTicket(id: $id) {
          __typename
          bookingid
          passengerName
          noOfTicket
          flight {
            __typename
            flightid
            capacity
            ticket {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          flightTicketId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTicketQuery>response.data.getTicket;
  }
  async ListTickets(
    filter?: ModelTicketFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTicketsQuery> {
    const statement = `query ListTickets($filter: ModelTicketFilterInput, $limit: Int, $nextToken: String) {
        listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            bookingid
            passengerName
            noOfTicket
            flight {
              __typename
              flightid
              capacity
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            flightTicketId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTicketsQuery>response.data.listTickets;
  }
  OnCreateFlightListener(
    filter?: ModelSubscriptionFlightFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFlight">>
  > {
    const statement = `subscription OnCreateFlight($filter: ModelSubscriptionFlightFilterInput) {
        onCreateFlight(filter: $filter) {
          __typename
          flightid
          capacity
          ticket {
            __typename
            items {
              __typename
              bookingid
              passengerName
              noOfTicket
              id
              createdAt
              updatedAt
              flightTicketId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFlight">>
    >;
  }

  OnUpdateFlightListener(
    filter?: ModelSubscriptionFlightFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFlight">>
  > {
    const statement = `subscription OnUpdateFlight($filter: ModelSubscriptionFlightFilterInput) {
        onUpdateFlight(filter: $filter) {
          __typename
          flightid
          capacity
          ticket {
            __typename
            items {
              __typename
              bookingid
              passengerName
              noOfTicket
              id
              createdAt
              updatedAt
              flightTicketId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFlight">>
    >;
  }

  OnDeleteFlightListener(
    filter?: ModelSubscriptionFlightFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFlight">>
  > {
    const statement = `subscription OnDeleteFlight($filter: ModelSubscriptionFlightFilterInput) {
        onDeleteFlight(filter: $filter) {
          __typename
          flightid
          capacity
          ticket {
            __typename
            items {
              __typename
              bookingid
              passengerName
              noOfTicket
              id
              createdAt
              updatedAt
              flightTicketId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFlight">>
    >;
  }

  OnCreateTicketListener(
    filter?: ModelSubscriptionTicketFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTicket">>
  > {
    const statement = `subscription OnCreateTicket($filter: ModelSubscriptionTicketFilterInput) {
        onCreateTicket(filter: $filter) {
          __typename
          bookingid
          passengerName
          noOfTicket
          flight {
            __typename
            flightid
            capacity
            ticket {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          flightTicketId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTicket">>
    >;
  }

  OnUpdateTicketListener(
    filter?: ModelSubscriptionTicketFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTicket">>
  > {
    const statement = `subscription OnUpdateTicket($filter: ModelSubscriptionTicketFilterInput) {
        onUpdateTicket(filter: $filter) {
          __typename
          bookingid
          passengerName
          noOfTicket
          flight {
            __typename
            flightid
            capacity
            ticket {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          flightTicketId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTicket">>
    >;
  }

  OnDeleteTicketListener(
    filter?: ModelSubscriptionTicketFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTicket">>
  > {
    const statement = `subscription OnDeleteTicket($filter: ModelSubscriptionTicketFilterInput) {
        onDeleteTicket(filter: $filter) {
          __typename
          bookingid
          passengerName
          noOfTicket
          flight {
            __typename
            flightid
            capacity
            ticket {
              __typename
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          flightTicketId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTicket">>
    >;
  }
}
