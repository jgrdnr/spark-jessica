export interface Note {
  id: string;
  title: string;
  content?: string;
  collection: string;
  createdBy: Date;
  createdAt: Date;
  deletedAt: Date;
  updatedAt: Date;
}
