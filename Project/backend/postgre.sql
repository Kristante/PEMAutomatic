PGDMP      3                |            PemAutomatic    16.4    16.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398    PemAutomatic    DATABASE     �   CREATE DATABASE "PemAutomatic" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "PemAutomatic";
                postgres    false            �            1259    16408    orders    TABLE     �   CREATE TABLE public.orders (
    id bigint NOT NULL,
    name text NOT NULL,
    phone_number text NOT NULL,
    date date NOT NULL,
    "time" time without time zone NOT NULL
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    16407    Orders_ID_seq    SEQUENCE     x   CREATE SEQUENCE public."Orders_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Orders_ID_seq";
       public          postgres    false    216            �           0    0    Orders_ID_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Orders_ID_seq" OWNED BY public.orders.id;
          public          postgres    false    215                       2604    16411 	   orders id    DEFAULT     h   ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public."Orders_ID_seq"'::regclass);
 8   ALTER TABLE public.orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            �          0    16408    orders 
   TABLE DATA           F   COPY public.orders (id, name, phone_number, date, "time") FROM stdin;
    public          postgres    false    216   �
       �           0    0    Orders_ID_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Orders_ID_seq"', 4, true);
          public          postgres    false    215                       2606    16415    orders Orders_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "Orders_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.orders DROP CONSTRAINT "Orders_pkey";
       public            postgres    false    216            �   i   x�3�����Sp�O�442�515�5��4�4202�5��52��L,�-��8/̺��bÅ�v �����@m@]�Xus��&�""!��0F��� �0*�     