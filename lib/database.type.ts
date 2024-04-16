export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      category: {
        Row: {
          created_at: string;
          id: number;
          price: number | null;
          type: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          price?: number | null;
          type?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          price?: number | null;
          type?: string | null;
        };
        Relationships: [];
      };
      product: {
        Row: {
          category_id: number | null;
          created_at: string;
          id: number;
          image: string | null;
          isBooked: boolean | null;
          isSold: boolean | null;
          name: string | null;
          status: string | null;
        };
        Insert: {
          category_id?: number | null;
          created_at?: string;
          id?: number;
          image?: string | null;
          isBooked?: boolean | null;
          isSold?: boolean | null;
          name?: string | null;
          status?: string | null;
        };
        Update: {
          category_id?: number | null;
          created_at?: string;
          id?: number;
          image?: string | null;
          isBooked?: boolean | null;
          isSold?: boolean | null;
          name?: string | null;
          status?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "product_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "category";
            referencedColumns: ["id"];
          }
        ];
      };
      profiles: {
        Row: {
          first_name: string | null;
          id: string;
          last_name: string | null;
          rank: string | null;
        };
        Insert: {
          first_name?: string | null;
          id: string;
          last_name?: string | null;
          rank?: string | null;
        };
        Update: {
          first_name?: string | null;
          id?: string;
          last_name?: string | null;
          rank?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      shoppingCart: {
        Row: {
          created_at: string;
          id: number;
          product_id: number | null;
          quantity: number | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          product_id?: number | null;
          quantity?: number | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          product_id?: number | null;
          quantity?: number | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "shoppingCart_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "product";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "shoppingCart_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      "Transactions ": {
        Row: {
          cartId: number | null;
          id: number;
          transactionDate: string;
        };
        Insert: {
          cartId?: number | null;
          id?: number;
          transactionDate?: string;
        };
        Update: {
          cartId?: number | null;
          id?: number;
          transactionDate?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Transactions _cartId_fkey";
            columns: ["cartId"];
            isOneToOne: false;
            referencedRelation: "shoppingCart";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never;
