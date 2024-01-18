
export interface Contact {
  name: string;
  lastName?: string;
  nationalId?: string;
  direction?: string;
  emails: Email[];
  phones: Phone[];
}

export interface Email {
  emailContact: string;
}

export interface Phone {
  number: string;
}
