# Generated by Django 3.0.5 on 2020-09-17 03:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasukeai_app', '0002_auto_20200917_0335'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='komarigoto',
            name='komarigoto_id',
        ),
    ]
