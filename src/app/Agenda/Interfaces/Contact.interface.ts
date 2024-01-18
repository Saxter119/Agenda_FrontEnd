export interface Contact {
  id: number,
  name: string;
  lastName?: string;
  nationalId?: string;
  direction?: string;
  emails: Email[];
  phones: Phone[];
}

export interface Email {
  id: number,
  emailContact: string;
}

export interface Phone {
  id: number,
  number: string;
}
