import Image from "next/image";
import { Column, Row, Card, Avatar, Text, Button } from "@once-ui-system/core";

export default function WeddingInvitationPage() {
  return (
    <Column gap="24" padding="24" style={{ maxWidth: 720, margin: "0 auto" }}>
      {/* Header */}
      <Card radius="l-4" padding="24" border="neutral-alpha-weak">
        <Column gap="12" align="center">
          <Text size="s" color="secondary">Undangan Pernikahan</Text>
          <Text size="s" variant="body-default-m">Ahmad & Aisyah</Text>
          <Text size="s">Minggu, 12 Mei 2026</Text>
        </Column>
      </Card>

      {/* Hero Image */}
      <Card radius="l-4" padding="0" border="neutral-alpha-weak" style={{ overflow: "hidden" }}>
        <Image
          src="/images/wedding.jpg"
          alt="Wedding"
          width={800}
          height={600}
          sizes="100vw"
          style={{ width: "100%", height: "auto", aspectRatio: "4 / 3" }}
        />
      </Card>

      {/* Couple Section */}
      <Card radius="l-4" padding="24" border="neutral-alpha-weak">
        <Row gap="24" align="center">
          <Column gap="8" align="center" style={{ flex: 1 }}>
            <Avatar size="lg" src="/images/groom.jpg" />
            <Text variant="body-default-m">Ahmad</Text>
            <Text size="s" color="secondary">Putra dari Bpk. Fulan & Ibu Fulanah</Text>
          </Column>

          <Text size="s" variant="body-default-m">&</Text>

          <Column gap="8" align="center" style={{ flex: 1 }}>
            <Avatar size="lg" src="/images/bride.jpg" />
            <Text variant="body-default-m">Aisyah</Text>
            <Text size="s" color="secondary">Putri dari Bpk. Fulan & Ibu Fulanah</Text>
          </Column>
        </Row>
      </Card>

      {/* Event Details */}
      <Card radius="l-4" padding="24" border="neutral-alpha-weak">
        <Column gap="12">
          <Text size="s" variant="body-default-m">Detail Acara</Text>
          <Row>
            <Text>Akad Nikah</Text>
            <Text>08.00 WIB</Text>
          </Row>
          <Row>
            <Text>Resepsi</Text>
            <Text>11.00 WIB</Text>
          </Row>
          <Text size="s" color="secondary">
            Gedung Serbaguna
            <br />Jl. Contoh Alamat No. 123, Jakarta
          </Text>
        </Column>
      </Card>

      {/* Actions */}
      <Row gap="12">
        <Button as="a" href="https://maps.google.com" target="_blank">
          Lihat Lokasi
        </Button>
        <Button variant="secondary">Simpan ke Kalender</Button>
      </Row>

      {/* Footer */}
      <Text size="s" color="secondary" align="center">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir
      </Text>
    </Column>
  );
}
