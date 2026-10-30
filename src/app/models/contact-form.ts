export interface ContactForm {
  contact: {
    firstname: string;
    lastname: string;
    email: string;
    meetingType: MeetingType;
    description: string;
    availabilities: Date[];
    atHome: boolean;
  };
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
}

export enum MeetingType {
  Estimate = 'Estimate',
  Repair = 'Repair',
  Appraise = 'Appraise',
}
