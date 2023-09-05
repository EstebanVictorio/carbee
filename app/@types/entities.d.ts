type Maybe<T> = T | null | undefined;

type AppointmentDto = {
  id: string;
  paymentId: string;
  userId: string;
  duration: number;
  scheduledTime: string;
  status: "SCHEDULED" | "PAID" | "COMPLETE" | "IN_PROGRESS";
  workOrder: {
    service: string;
  };
};

type AppointmentsResponse  = {
  edges: {
    node: AppointmentDto,
    cursor: string
  }[],
  pageInfo: {
    hasNextPage: boolean,
    hasPreviousPage: boolean,
    previousCursor: string,
    nextCursor: string
  }
}