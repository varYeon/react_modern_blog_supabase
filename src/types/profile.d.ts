import type { Database } from "./database";

// 수동 지정
// interface Profile {
//   id: string;
//   created_at: Date;
//   email: string;
//   display_name: string | null;
//   avatar_url: string | null;
//   bio: string | null;
// }

// supabase에서 가져온 database.ts를 활용할 수도 있음
type Profile = Database["public"]["Tables"]["profiles"]["Row"];
