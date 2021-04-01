export interface IPet {
  id: number;
  category: category[];
  name: string;
  photoUrls: photos[];
  tags: tags[];
  status: string;
}

interface category {
  id: number;
  name: string;
}

interface photos {
  photos: string[];
}

interface tags {
  id: number;
  name: string;
}
